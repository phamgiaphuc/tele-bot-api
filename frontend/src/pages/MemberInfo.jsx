import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import { useSnackbar } from 'notistack';

const MemberInfo = () => {
  const [member, setMember] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/v1/member/${id}`)
      .then((res) => {
        setMember(res.data.member);
        setLoading(false);
        enqueueSnackbar('Access database successfully', { variant: 'success' });
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      })
  }, []);
  return (
    <div className='p-4'>
      <BackButton/>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl my-4 font-semibold text-slate-800'>Member Information</h1>
      </div>
      {loading ? (
        <Spinner/>
      ) : (
        <div className='w-full flex justify-center items-center'>
            <div className='w-10/12 overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-400 dark:text-gray-400'>
                <thead className='text-base text-gray-700 normal-case bg-gray-50 dark:bg-gray-700 dark:text-gray-300'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>Username</th>
                    <th scope='col' className='px-6 py-4'>User type</th>
                    <th scope='col' className='px-6 py-4'>Group ID</th>
                    <th scope='col' className='px-6 py-4'>Created time</th>
                    <th scope='col' className='px-6 py-4'>User ID</th>
                  </tr>
                </thead>
                <tbody>
                    <tr key={member.user_id} className='text-base bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                      <th scope='row' className='px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white'>{member.username}</th>
                      <td className='px-6 py-4'>{member.user_type}</td>
                      <td className='px-6 py-4'>{member.group_id}</td>
                      <td className='px-6 py-4'>{member.created_time}</td>
                      <td className='px-6 py-4'>{member.user_id}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
      )}
    </div>
  )
}

export default MemberInfo