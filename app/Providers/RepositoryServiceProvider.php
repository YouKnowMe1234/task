<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            \App\Repositories\EmployeeInterface::class,
            \App\Repositories\EmployeeRepository::class
        );

        $this->app->singleton(
            \App\Repositories\CalendarInterface::class,
            \App\Repositories\CalendarRepository::class
        );

        $this->app->singleton(
            \App\Repositories\ReasonInterface::class,
            \App\Repositories\ReasonRepository::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
