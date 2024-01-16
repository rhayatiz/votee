<?php

namespace App\Services;

use App\Repositories\PollRepository;
use Hashids\Hashids;
use Illuminate\Support\Facades\URL;
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

        // prevent double slugs
        while ($this->checkIfSlugExists($slug)) {
            $hashid = new Hashids(Uuid::uuid1());
            $slug = $hashid->encode(1, 2, 3);
        }
        
        return $slug;
    }

    public function checkIfSlugExists(string $slug): bool
    {
        if ($this->pollRepository->findBySlug($slug)) {
            return true;
        }
        return false;
    }

    public function getPollLink(string $slug): string
    {
        return URL::to('') . '/poll/' . $slug;
    }

    public function getResultsLink(string $slug): string
    {
        return URL::to('') . '/poll/' . $slug . '/results';
    }

}