<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
        if (Schema::hasColumn('posts', 'author_id')) {
            $table->dropColumn('author_id');
        }
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Illuminate\Database\Schema\Blueprint $table) {
            $table->unsignedBigInteger('author_id')->nullable(); // re-add if needed
        });
    }
};
