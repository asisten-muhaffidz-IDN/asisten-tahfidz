import { usePage } from '@inertiajs/react'

export default function hasAnyPermission(permissions) {
    const {auth} = usePage().props;

    let allPermission = auth.permissions;

    let hasPermission = false;
    
    permissions.forEach(function(item){
        if(allPermission[item]) hasPermission = true;
    })

    return hasPermission;
}
