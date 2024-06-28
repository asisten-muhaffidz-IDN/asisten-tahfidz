<?php

namespace Database\Seeders;

use App\Models\Halaqoh;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HalaqohSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Halaqoh::factory(5)->create();
    }
}
