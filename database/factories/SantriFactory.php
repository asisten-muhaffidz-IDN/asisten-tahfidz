<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Santri;
use App\Models\Halaqoh;
use App\Models\Ustadz;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Santri>
 */
class SantriFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'nis' => $this->faker->unique()->numberBetween(10000, 99999),
        'nama' => $this->faker->name(),
        'kelas' => $this->faker->word(),
        'kamar' => $this->faker->word(),
        'tgl_masuk' => $this->faker->date(),
        'hafalan_awal' => $this->faker->numberBetween(1, 30),
        ];
    }

    public function configure()
    {
        $userIds = range(6, 30);

        return $this->afterCreating(function (Santri $santri) use ($userIds) {
            $user = User::find($userIds[array_rand($userIds)]);
            $halaqoh = Halaqoh::inRandomOrder()->first();
            $ustadz = Ustadz::inRandomOrder()->first();

            $santri->update([
                'id_user' => $user->id,
                'id_halaqoh' => $halaqoh->id,
                'id_ustadz' => $ustadz->id,
            ]);
        });
    }
}
