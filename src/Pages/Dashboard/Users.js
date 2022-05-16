import React from 'react';
import { useQuery } from 'react-query';
import Looding from '../Shared/Looding';

const Users = () => {
    const { isLoading, data: users } = useQuery('users', () =>
        fetch('http://localhost:5000/user').then(res =>
            res.json()
        ))

    if (isLoading) {
        return <Looding></Looding>
    }
    return (
        <div>
            <h2 className="text-2xl"> All Users {users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;