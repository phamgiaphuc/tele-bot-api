import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditMember = () => {
  const [username, setUsername] = useState('');
  const [user_id, setUserID] = useState('');
  const [user_type, setUserType] = useState('');
  const [group_id, setGroupID] = useState('');
  const [key, setKey] = useState('');
  const [created_time, setCreatedTime] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/api/v1/member/${id}`)
    .then((res) => {
        setUsername(res.data.member.username);
        setUserID(res.data.member.user_id);
        setGroupID(res.data.member.group_id);
        setKey(res.data.member.key);
        setCreatedTime(res.data.member.created_time);
        setUserType(res.data.member.user_type);
        setLoading(false);
        enqueueSnackbar('Access database successfully', { variant: 'success' });
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, [])
  
  const handleEditMember = () => {
    const data = {
      user_id: user_id,
      username: username,
      user_type: user_type,
      group_id: group_id,
      created_time: created_time,
      key: `${username}#${user_type}#${group_id}`
    };
    setLoading(true);
    axios
      .patch(`http://localhost:8000/api/v1/member/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Member edited successfully', { variant: 'success' });
        navigate('/api/v1/member');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl my-4 font-semibold text-slate-800'>Edit member</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col rounded-xl w-[800px] p-4 mx-auto dark:bg-gray-900'>
        <div className='my-4'>
          <label className='font-semibold text-lg mr-4 text-gray-300'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='rounded-xl px-4 py-2  w-[600px] bg-gray-300 text-lg'
          />
        </div>
        <div className='my-4'>
          <label className='font-semibold text-lg mr-4 text-gray-300 pr-10'>User ID</label>
          <label className='text-gray-300 text-lg'>{user_id}</label>
        </div>
        <button className='p-2 rounded-md border-slate-950 bg-sky-500 text-gray-200 font-semibold text-lg m-8 hover:bg-sky-800' onClick={handleEditMember}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditMember