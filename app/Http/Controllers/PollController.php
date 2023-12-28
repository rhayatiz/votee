<?php

namespace App\Http\Controllers;

use App\Models\Poll;
use App\Models\Question;
use App\Models\Response;
use App\Services\SlugService;
use Hashids\Hashids;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class PollController extends Controller
{
    public function index()
    {
        return Inertia::render('Poll/New', []);
    }

    public function create(Request $request, SlugService $slugService)
    {
        $inputArray = $request->getContent();
        $inputArray = json_decode($inputArray, true);

        $inputArray['slug'] = $slugService->getNextSlug();
    
        // DB::transaction(function() use ($inputArray) {
        //     // todo move to repository / service
        //     $poll = Poll::create($inputArray);
        //     // $poll->save();
            
        //     // create questions
        //     foreach ($inputArray['questions'] as $questionArray) {
        //         $questionArray['poll_id'] = $poll->id;
        //         $question = Question::create($questionArray);
        //         // $question->save();
                
        //         foreach ($questionArray['answers'] as $answerArray) {
        //             $answerArray['question_id'] = $question->id;
        //             $answer = Response::create($answerArray);
        //             // $answer->save();
        //         }
        //     }
        // });
            

        dd($inputArray, Uuid::uuid1(), $slugService->getNextSlug());

        // return Inertia::location(route('home'));
    }
}
