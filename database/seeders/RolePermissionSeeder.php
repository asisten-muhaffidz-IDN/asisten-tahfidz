<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // create permissions
        Permission::create(['name'=>'tambah data user']);
        Permission::create(['name'=>'lihat data user']);
        Permission::create(['name'=>'edit data user']);
        Permission::create(['name'=>'delete data user']);

        Permission::create(['name'=>'tambah data santri']);
        Permission::create(['name'=>'lihat data santri']);
        Permission::create(['name'=>'edit data santri']);
        Permission::create(['name'=>'delete data santri']);
        
        Permission::create(['name'=>'tambah data ustadz']);
        Permission::create(['name'=>'lihat data ustadz']);
        Permission::create(['name'=>'edit data ustadz']);
        Permission::create(['name'=>'delete data ustadz']);

        Permission::create(['name'=>'tambah data halaqoh']);
        Permission::create(['name'=>'lihat data halaqoh']);
        Permission::create(['name'=>'edit data halaqoh']);
        Permission::create(['name'=>'delete data halaqoh']);

        Permission::create(['name'=>'tambah data laporan mingguan']);
        Permission::create(['name'=>'lihat data laporan mingguan']);
        Permission::create(['name'=>'edit data laporan mingguan']);
        Permission::create(['name'=>'delete data laporan mingguan']);

        Permission::create(['name'=>'tambah data laporan bulanan']);
        Permission::create(['name'=>'lihat data laporan bulanan']);
        Permission::create(['name'=>'edit data laporan bulanan']);
        Permission::create(['name'=>'delete data laporan bulanan']);

        Permission::create(['name'=>'tambah data artikel']);
        Permission::create(['name'=>'lihat data artikel']);
        Permission::create(['name'=>'edit data artikel']);
        Permission::create(['name'=>'delete data artikel']);

        Permission::create(['name'=>'tambah data kegiatan']);
        Permission::create(['name'=>'lihat data kegiatan']);
        Permission::create(['name'=>'edit data kegiatan']);
        Permission::create(['name'=>'delete data kegiatan']);

        // create roles and assign existing permissions

        $ustadzRole = Role::create(['name'=>'ustadz']);
        $ustadzRole->givePermissionTo('tambah data santri');
        $ustadzRole->givePermissionTo('lihat data santri');
        $ustadzRole->givePermissionTo('edit data santri');
        $ustadzRole->givePermissionTo('delete data santri');

        $ustadzRole->givePermissionTo('lihat data ustadz');

        $ustadzRole->givePermissionTo('lihat data halaqoh');
        $ustadzRole->givePermissionTo('edit data halaqoh');
        $ustadzRole->givePermissionTo('delete data halaqoh');

        $ustadzRole->givePermissionTo('tambah data laporan mingguan');
        $ustadzRole->givePermissionTo('lihat data laporan mingguan');
        $ustadzRole->givePermissionTo('edit data laporan mingguan');
        $ustadzRole->givePermissionTo('delete data laporan mingguan');

        $ustadzRole->givePermissionTo('tambah data laporan bulanan');
        $ustadzRole->givePermissionTo('lihat data laporan bulanan');
        $ustadzRole->givePermissionTo('edit data laporan bulanan');
        $ustadzRole->givePermissionTo('delete data laporan bulanan');

        $ustadzRole->givePermissionTo('tambah data kegiatan');
        $ustadzRole->givePermissionTo('lihat data kegiatan');
        $ustadzRole->givePermissionTo('edit data kegiatan');
        $ustadzRole->givePermissionTo('delete data kegiatan');

        $ustadzRole->givePermissionTo('tambah data artikel');
        $ustadzRole->givePermissionTo('lihat data artikel');
        $ustadzRole->givePermissionTo('edit data artikel');
        $ustadzRole->givePermissionTo('delete data artikel');

        $santriRole = Role::create(['name'=>'santri']);
        $santriRole->givePermissionTo('lihat data santri');

        $santriRole->givePermissionTo('lihat data ustadz');

        $santriRole->givePermissionTo('lihat data halaqoh');

        $santriRole->givePermissionTo('lihat data laporan mingguan');

        $santriRole->givePermissionTo('lihat data laporan bulanan');

        $adminRole = Role::create(['name'=>'admin']);
        // gets all permissions via Gate::before rule


    }
}
