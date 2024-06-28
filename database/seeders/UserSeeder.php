<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'user_name' => 'Test User',
            'email'     => 'testemail@gmail.com',
            'password'  => bcrypt('testpassword123'),
            'role'      => 2
        ]);

        // User::factory(30)->create();

    }
}
