<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;

# Model Class
use App\Models\Job;
use App\Models\User;
use App\Policies\ChatPolicy;
# Policies Class
use App\Policies\JobPolicy;
use App\Policies\UserPolicy;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
        User::class => UserPolicy::class,
        Job::class => JobPolicy::class,
        Job::class => JobPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // User Gate Policy
        Gate::define('create-user', [UserPolicy::class, 'create']);
        Gate::define('update-user', [UserPolicy::class, 'update']);
        Gate::define('delete-user', [UserPolicy::class, 'delete']);
        Gate::define('list-user', [UserPolicy::class, 'list']);
        Gate::define('detail-user', [UserPolicy::class, 'detail']);
        
        // Job Gate Policy
        Gate::define('create-job', [JobPolicy::class, 'create']);
        Gate::define('update-job', [JobPolicy::class, 'update']);
        Gate::define('delete-job', [JobPolicy::class, 'delete']);
        Gate::define('list-job', [JobPolicy::class, 'list']);
        Gate::define('detail-job', [JobPolicy::class, 'detail']);

        // Chat Gate Policy
        Gate::define('get-message', [ChatPolicy::class, 'index']);
    }
}
