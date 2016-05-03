<?php
/**
 * Created by PhpStorm.
 * User: livingstonefultang
 * Date: 29/04/2016
 * Time: 11:40
 */

namespace Budkit\Polymerase;

use Budkit\Application\Support\Service;
use Budkit\Dependency\Container;
use Budkit\Cms\Controller;
use Budkit\Event\Event;
use Route;


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

        //Register a before dispatch method to check if
        $this->application->observer->attach([$this, "onRegisterThemes"], "app.register.themes");

        //After dispatch response we want to send everything to index.html file.
        $this->application->observer->attach([$this, "onAfterDispatch"], "Dispatcher.afterDispatch");

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

    }

    public function onAfterDispatch($Event){


        die;

        $response = $this->application->response;

        if( $response->getContentType() == "html" ) :

            //We will intercept the response rendering process.
            $this->application->observer->attach(
                function(Event $Event) use (&$response){

                /// add custom html to the content
                $response->addContent('Hello here we load custom html');

                //stop the rendering of the prescribed layout;
                $Event->stopPropagation();

            }, 'Controller.beforeRender' );

        endif;

    }



    public function definition()
    {
        return [

            "app.register" => "onRegister"

        ];
    }
}