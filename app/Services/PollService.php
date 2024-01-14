<?php

namespace App\Services;

use App\Repositories\PollRepository;
use Illuminate\Support\Facades\URL;
use Ramsey\Uuid\Uuid;

class PollService 
{

    public function __construct(
        private PollRepository $pollRepository
    ) {
    }

    public function getVoteArray(array $poll): array
    {
        $voteArray = [];

        return $voteArray;

    }

}