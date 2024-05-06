<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Interface\ChatInterface;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    //
    private ChatInterface $chatRepository;
    public function __construct(ChatInterface $chatRepository) {
        $this->chatRepository = $chatRepository;
    }

    public function index(Request $request) {
        try {
            $chat = $this->chatRepository->getList($request);
            return response()->json([
                'status' => true,
                'message' => 'Chat list fetched successfully',
                'list' => $chat,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function sendMessage(Request $request) {
        try {
            $chat = $this->chatRepository->save($request);
            return response()->json([
                'status' => true,
                'message' => 'Message sent successfully',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function deleteMessage($id) {
        try {
            $message = $this->chatRepository->destroy($id);
            return response()->json([
                'status' => true,
                'message' => 'Message delete successfully',
                'data' => $message
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
