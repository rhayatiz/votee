<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use App\Models\Question;
use App\Models\Vote;
use App\Repositories\PollRepository;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EntryController extends Controller
{

    public function __construct(
    ) {}

    public function create(Request $request)
    {
        $ip = $request->getClientIp();
        $data = $request->json()->all();
        $responsesArray = $data['data'];
        $pollId = $data['pollId'];

        DB::beginTransaction();
        try {
            $entry = Entry::create([
                'visitor' => $ip,
                'poll_id' => $pollId
            ]);
            foreach ($responsesArray as $key => $value) {
                $questionId = $key;
                $question = Question::find($questionId);
                if ($question->type == 'input') {
                    Vote::create([
                        'input' => $value,
                        'entry_id' => $entry->id,
                        'response_id' => $question->responses[0]->id,
                        'question_id' => $questionId
                    ]);
                } else {
                    // multiple responses
                    if (is_array($value)) {
                        foreach ($value as $qId) {
                            Vote::create([
                                'entry_id' => $entry->id,
                                'response_id' => $qId,
                                'question_id' => $questionId
                            ]);
                        }
                    } else {
                        Vote::create([
                            'entry_id' => $entry->id,
                            'response_id' => $value,
                            'question_id' => $questionId
                        ]);
                    }
                }
            }
        } catch (\Throwable $th) {
            DB::rollBack();
            // handle exception error UI
            dd($th);
        }
        DB::commit();

        return response()->json([
            'slug' => 'EZAL4343',
            'word' => 'word',
            'ip' => $ip
        ]);
    }
}
