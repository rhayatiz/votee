<?php

namespace App\Services;

use App\Repositories\PollRepository;
use Hashids\Hashids;
use Ramsey\Uuid\Uuid;

class SlugService 
{

    public function __construct(
        private Hashids $hashIds,
        private PollRepository $pollRepository
    ) {
    }

    public function getNextSlug()
    {
        $hashid = new Hashids(Uuid::uuid1());
        $slug = $hashid->encode(1, 2, 3);
        return $slug;
    }

    public function checkIfSlugExists(string $slug): bool
    {
        if ($this->pollRepository->findBySlug($slug)) {
            return true;
        }
        return false;
    }

}