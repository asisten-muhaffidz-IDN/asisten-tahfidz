import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import EditPhotoUstadz from './Partial/EditPhotoUstadz'
import { Select } from 'flowbite-react'
import Swal from 'sweetalert2'


export default function EditSantri({auth, dataSantriSelected}) {
    console.log(dataSantriSelected)



    const { data, setData, patch, errors } = useForm({
        nip: dataSantriSelected.nip,
        nama: dataSantriSelected.nama,
        status: dataSantriSelected.status,
        posisi: dataSantriSelected.posisi,
        jabatan: dataSantriSelected.jabatan
    });

    const submit = async (e) => {
        e.preventDefault();
    
        try {
            await patch(route('ustadz.update', dataSantriSelected.id));
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: 'success',
                title: 'Data berhasil disimpan'
            });
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Terjadi kesalahan',
                text: 'Gagal menyimpan data, silakan coba lagi.'
            });
        }
    };
    return (
        <Authenticated
        user={auth.user}
        header={'Edit Ustadz'}
        >
            <Head title='Edit Ustadz'/>
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section>
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Edit Data Ustadz {dataSantriSelected.nama}</h2>
                            </header>
                            <div className="mt-10 md:grid grid-cols-9">
                                <form onSubmit={submit} className="space-y-6 md:col-span-5">
                                    <div>
                                        <InputLabel htmlFor="nis" value="Nis" />

                                        <TextInput
                                            id="nis"
                                            type='number'
                                            className="mt-1 block w-full"
                                            value={data.nis}
                                            onChange={(e) => setData('nis', e.target.value)}
                                        />

                                        <InputError className="mt-2" message={errors.nis} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="nama" value="Nama" />

                                        <TextInput
                                            id="nama"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.nama}
                                            onChange={(e) => setData('nama', e.target.value)}
                                        />

                                        <InputError className="mt-2" message={errors.nama} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="status" value="Status" />

                                        <Select
                                            id="status"
                                            type="text"
                                            className="mt-1 block w-full bg-white"
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                        >
                                            <option value={'Aktif'}>Aktif</option>
                                            <option value={'Cuti'}>Cuti</option>
                                            <option value={'Sakit'}>Sakit</option>

                                        </Select>

                                        <InputError className="mt-2" message={errors.status} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="posisi" value="Posisi" />

                                        <TextInput
                                            id="posisi"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.posisi}
                                            onChange={(e) => setData('posisi', e.target.value)}
                                        />

                                        <InputError className="mt-2" message={errors.posisi} />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="jabatan" value="Jabatan" />

                                        <TextInput
                                            id="jabatan"
                                            type="text"
                                            className="mt-1 block w-full"
                                            value={data.jabatan}
                                            onChange={(e) => setData('jabatan', e.target.value)}
                                        />

                                        <InputError className="mt-2" message={errors.jabatan} />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <PrimaryButton>Simpan</PrimaryButton>
                                    </div>
                                </form>
                                <div className='md:col-span-4'>
                                    <EditPhotoUstadz 
                                    dataSantriSelected={dataSantriSelected}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
