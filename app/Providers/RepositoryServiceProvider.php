<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use App\Repository\UserRepository;
use App\Interface\UserInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        $this->app->bind(UserInterface::class, UserRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
