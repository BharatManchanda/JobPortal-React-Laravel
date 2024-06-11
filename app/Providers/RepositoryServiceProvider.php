<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;

# Interface
use App\Interface\JobInterface;
use App\Interface\UserInterface;
use App\Interface\ChatInterface;
use App\Interface\CategoryInterface;

# Repository
use App\Repository\UserRepository;
use App\Repository\JobRepository;
use App\Repository\ChatRepository;
use App\Repository\CategoryRepository;

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
        $this->app->bind(ChatInterface::class, ChatRepository::class);
        $this->app->bind(ChatInterface::class, ChatRepository::class);
        $this->app->bind(CategoryInterface::class, CategoryRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
