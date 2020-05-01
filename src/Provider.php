<?php
/**
 * Created by PhpStorm.
 * User: livingstonefultang
 * Date: 29/04/2016
 * Time: 11:40
 */

namespace Budkit\Polymerase;

use Budkit\Application\Support\Service;
use Budkit\Cms\Helper\Menu;
use Budkit\Dependency\Container;
use Budkit\Cms\Controller;
use Budkit\Event\Event;
use Route;
use View;


class Provider implements Service
{
    protected $application;

    public function __construct(Container $application)
    {
        $this->application = $application;
    }

    public static function  getPackageDir()
    {
        return __DIR__ . "/";
    }

    public function onRegister()
    {
        $file = PATH_CONFIG.DS.'config.yaml';
        $data = yaml_parse_file($file);

        //print_R($data);

        //die;




        //Register a before dispatch method to check if
        $this->application->observer->attach([$this, "onRegisterThemes"], "app.register.themes");

        //After dispatch response we want to send everything to index.html file.
        $this->application->observer->attach([$this, "onRender"], "Controller.beforeRender");

    }


    public function onRegisterThemes($event){


        $themes     = $event->getResult();
        $themes[]   = [
            "provider" => "budkit/polymerase",
            "name"  => "theme",
            "source"=> $this->getPackageDir()."../src/theme"
        ];

        //Tell the system to use this as the default theme!, This should be set from configuration!
        $this->application->config->set("design.theme.provider", "budkit/polymerase");
        $this->application->config->set("design.theme.name", "theme");

        //Register the theme
        $event->setResult( $themes ); //all members who call this even need to append to the result;


    }


    public function onBeforeDispatch($Event){

        //If format is html then push the html response page and stop propagation

        //Capture the data and send as websocket data;


    }

    public function onRender($Event){

        $response = $this->application->response;
        $request   = $this->application->request;
    
        $provider = $this->application->config->get("design.theme.provider");
        $name  = $this->application->config->get("design.theme.name");

        //Before providing overides, make sure this theme is being used
        if($provider != "budkit/polymerase" || $name != "theme") return ;

        if( $response->getContentType() == "html" ) :

            //Get the request path info;
            $pathInfo = $request->getPathInfo();

            //Custom layouts maps
            $pathInfoMap = [
                "/member/signin" => 'theme/layouts/signin.html',
                "/member/signup" => 'theme/layouts/signup.html',
                "/" => 'theme/layouts/index.html'
            ];

            //get all data excluding private data
            $data = $response->getDataArray( true );
            $menu = $this->application->createInstance(Menu::class);

            //will manually add needed private data
            $data['session'] = $response->getData( "session" );
            $data['menu']    = $menu->getCompiledMenuArray("dashboardmenu", true, true);

            //print_R($data['menu']); die;

            /// add custom html to the content
            $response->addFileContent(
                $this->getPackageDir().
                    ( array_key_exists($pathInfo, $pathInfoMap)
                        ? $pathInfoMap[$pathInfo]
                        : $pathInfoMap["/"]
                    )
                ,
                [
                    "data" =>json_encode( $data )
                ]
            );

            //stop the rendering of the prescribed layout;
            $Event->stopPropagation();

        endif;

    }



    public function definition()
    {
        return [

            "app.register" => "onRegister"

        ];
    }
}