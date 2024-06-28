import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react'

export default function EditPhotoUstadz({dataUstadzSelected}) {
    console.log(dataUstadzSelected);
    const { data, setData, patch, errors, processing, recentlySuccessful, progress } = useForm({
        profile_photo: dataUstadzSelected.user ? dataUstadzSelected.user.profile_photo : '',
    });
    
    // console.log(data.profile_photo);
    const [preview, setPreview] = useState(data.profile_photo ? ('storage/image-ustadz/' + dataUstadzSelected.user.profile_photo) : ('assets/img/default.jpg'))
    
    const submit = (e) => {
        e.preventDefault();
        console.log(data.profile_photo);
        patch(route('user.update', dataUstadzSelected.user.id), );
    };

    const handlePhotoChange = (e) => {
        console.log(e.target.files[0]);
        let uploaded = e.target.files[0];
        setPreview(URL.createObjectURL(uploaded));
        setData('profile_photo', e.target.files[0]);
    };

    return (
        <div className="mt-20 md:mt-2 md:col-end-12 md:col-span-4 flex flex-col gap-7 md:justify-center md:items-center">                                        
            <img src={preview} className="hidden rounded-lg md:block lg:w-56 lg:h-56 md:w-44 md:h-44 object-cover" />
            <div>
                <form  className="flex flex-col gap-4">
                    <TextInput
                        id="profile_photo"
                        type="file"
                        name="profile_photo"
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={handlePhotoChange}
                        accept="image/*"
                    />
                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}

                    <InputError message={errors.profile_photo} className="mt-2" />

                    <div className="flex md:justify-center md:items-center gap-4">
                        <PrimaryButton disabled={processing}>Simpan</PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Foto berhasil disimpan</p>
                        </Transition>
                    </div>
                </form>
            </div>
        </div>
    )
}
