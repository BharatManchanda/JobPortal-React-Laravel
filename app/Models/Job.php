<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Job extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = array(
        'user_id',
        'title',
        'description',
        'industry_type',
        'department',
        'job_type',
        'education',
        'key_skills',
        'job_location',
        'benefits',
        'responsibilities',
        'preferred_skills',
        'experience',
        'ability_to_relocate',
        'speak_employe_phone_no',
        'shift_schedule',
        'status',
    );

    protected $casts = [
        'key_skills' => 'array',
    ];
}
