<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Poll extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'isProtected', 'password', 'slug'];

    public function questions(): HasMany
    {
        return $this->HasMany(Question::class);
    }

    public function entries(): HasMany
    {
        return $this->HasMany(Entry::class);
    }
}
