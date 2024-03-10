<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->longText('description');
            $table->string('industry_type');
            $table->string('department');
            $table->string('job_type');
            $table->string('education');
            $table->longText('key_skills')->nullable();;
            $table->string('job_location');
            $table->longText('benefits')->nullable();;
            $table->longText('responsibilities')->nullable();
            $table->longText('preferred_skills')->nullable();
            $table->integer('experience');
            $table->string('ability_to_relocate');
            $table->string('speak_employe_phone_no')->nullable();
            $table->string('shift_schedule');
            $table->string('status')->default('inactive');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
