<?php

namespace App\Repository;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

    class ChatRepository{
        public function getList(Request $request) {
            if (Auth::user()->role == 'client') {
                $messages = Message::where('sender_id', Auth::user()->id)
                    ->orWhere('receiver_id', Auth::user()->id)
                    ->get();
            } else {
                $messages = Message::where('sender_id', $request->sender_id)
                    ->orWhere('receiver_id', Auth::user()->id)
                    ->get();
            }
            return $messages;
        }

        public function save(Request $request, $id=null) {

        }

        public function destroy($id) {
            $message = Message::find($id);
            $message->delete();
            return $message;
        }
    }

?>