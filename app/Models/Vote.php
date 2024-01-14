<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vote extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['entry_id', 'response_id', 'question_id', 'input'];
    public $timestamps = false;

    public function entry(): BelongsTo
    {
        return $this->BelongsTo(Entry::class);
    }

    public function response(): BelongsTo
    {
        return $this->BelongsTo(Response::class);
    }

    public function question(): BelongsTo
    {
        return $this->BelongsTo(Question::class);
    }
}
