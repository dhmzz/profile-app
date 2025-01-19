import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/apiSlice';


export default function Cards() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.api);

    useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);

    return (
        <>
            <div className='drop-shadow-2xl rounded-lg w-full h-[fit-content] bg-slate-300 mt-11 mb-96'>
                <div className="flex flex-col px-11 py-11">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr className='bg-slate-400'>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-slate-50 uppercase">Title</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-slate-50 uppercase">Desc</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-slate-50 uppercase">Category</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-slate-50 uppercase">Images</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-slate-50 uppercase">Action</th>
                                </tr>
                            </thead>

                            {data.map((item) => (
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-100 duration-500 bg-white">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-600">{item.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            <img src={item.images[0]}/>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}

                            </table>
                        </div>
                        </div>
                    </div>
                </div> 
                <div>
                </div>
            </div>
        </>
    )
}
