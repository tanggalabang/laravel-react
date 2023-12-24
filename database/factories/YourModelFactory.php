<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\YourModel;

class YourModelFactory extends Factory
{
    protected $model = YourModel::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'address' => $this->faker->address,
        ];
    }
}
