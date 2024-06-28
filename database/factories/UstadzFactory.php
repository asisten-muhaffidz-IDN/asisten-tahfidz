<?php

namespace Database\Factories;

use App\Models\Halaqoh;
use App\Models\User;
use App\Models\Ustadz;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ustadz>
 */
class UstadzFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $statusOptions = ['Aktif', 'Cuti', 'Sakit'];

        return [
            'nip' => $this->faker->unique()->numberBetween(10000, 99999),
            'nama' => $this->faker->name(),
            'status' => $this->faker->randomElement($statusOptions),
            'jabatan' => $this->faker->word(),
            'posisi' => $this->faker->word(),
            'tgl_masuk' => $this->faker->date()
        ];
    }

    public function configure()
    {
        $userIds = range(1, 5); // Range from 1 to 5

        return $this->afterCreating(function (Ustadz $ustadz) use ($userIds) {
            $user = User::find($userIds[array_rand($userIds)]);
            $halaqoh = Halaqoh::inRandomOrder()->first();

            $ustadz->update([
                'id_user' => $user->id,
                'id_halaqoh' => $halaqoh->id,
            ]);
        });
    }
}

