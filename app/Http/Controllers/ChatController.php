<?php

namespace App\Http\Controllers;

use App\Events\ChatEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    //
    public function chatMessage(Request $request) {
        $senderId = Auth::user()->id;
        event(new ChatEvent($senderId, $request->receiver_id, $request->message));
        return false;
    }
}
