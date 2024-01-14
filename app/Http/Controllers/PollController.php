<?php

namespace App\Http\Controllers;

use App\Models\Poll;
use App\Models\Question;
use App\Models\Response;
use App\Repositories\PollRepository;
use App\Services\SlugService;
use Exception;
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

        $slug = $slugService->getNextSlug();
        $inputArray['slug'] = $slug;
    
        // todo move to repository / service
        DB::beginTransaction();
        try {
            $poll = Poll::create($inputArray);
            // create questions
            foreach ($inputArray['questions'] as $questionArray) {
                $questionArray['poll_id'] = $poll->id;
                $question = Question::create($questionArray);
                foreach ($questionArray['answers'] as $answerArray) {
                    $answerArray['question_id'] = $question->id;
                    Response::create($answerArray);
                }
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            // handle exception error UI
            dd($th);
        }
        DB::commit();
            
        $link = $slugService->getPollLink($slug);

        // redirect not working properly
        return redirect()->route('poll.created',[
            'poll' => $slug
        ]);
    }

    public function created(Request $request, SlugService $slugService)
    {
        $slug = $request->get('poll');
        $link = $slugService->getPollLink($slug);
        return Inertia::render('Poll/Created', [
            'link' => $link
        ]);
    }

    public function show(string $slug, PollRepository $pollRepository)
    {
        $poll = $pollRepository->findBySlug($slug);
        $id = $poll->id;
        $poll = Poll::with('questions', 'questions.responses')->find($id);

        return Inertia::render('Poll/Show', [
            'poll' => $poll
        ]);
    }

    public function test()
    {
        return response()->json([
            'slug' => 'EZAL4343',
            'word' => 'word'
        ]);
        return Inertia::location(route('home'));
        return to_route('poll.show', ['slug' => 'www']);
    }

}
