<?php

namespace App\Services;

use App\Repositories\PollRepository;
use Hashids\Hashids;
use Illuminate\Support\Facades\URL;
use Ramsey\Uuid\Uuid;

class PollService 
{

    public function __construct(
        private Hashids $hashIds,
        private PollRepository $pollRepository
    ) {
    }

    public function getVoteArray(array $poll): array
    {
        $voteArray = [];

        return $voteArray;

    }

}