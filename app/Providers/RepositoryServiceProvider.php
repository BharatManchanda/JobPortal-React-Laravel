<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;

# Interface
use App\Interface\JobInterface;
use App\Interface\UserInterface;

# Repository
use App\Repository\UserRepository;
use App\Repository\JobRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(JobInterface::class, JobRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
