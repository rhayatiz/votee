<?php

namespace App\Repositories;

use App\Models\Poll;

class PollRepository extends Repository
{
    protected static string $model = Poll::class;

    public function findBySlug(string $slug): ?Poll
    {
        return $this->where('slug', $slug)->first();
    }

}