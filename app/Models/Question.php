<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Question extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['type', 'label', 'poll_id'];
    public $timestamps = false;

    public function poll(): BelongsTo
    {
        return $this->belongsTo(Poll::class);
    }

    public function responses(): HasMany
    {
        return $this->HasMany(Response::class);
    }
}
