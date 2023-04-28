export function ModalInfo({residentInfo, closeModal}) {
    const handleClickCloseButton = () => {
        closeModal()
    }

    return (
        <section className='fixed inset-0 flex items-center justify-center bg-opacity-70 bg-black z-40'>
                    <div className='rounded-md relative border-2 border-dark-green w-[70%] sm:w-[60%] max-w-[800px] modalCard max-h-[80vh] flex flex-col overflow-y-auto md:flex-row md:max-w-2xl lg:text-xl lg:w-[90%]'>
                        <div>
                            <img className='w-full md:w-[500px] md:h-full md:object-cover' src={residentInfo?.image} alt="Resident image" />
                        </div>
                        
                        <div className='w-full text-white p-8 flex flex-col bg-black border-t-2 border-dark-green md:border-t-0 md:border-l-2'>
                            <h3 className='text-2xl font-semibold self-center pb-5 text-dark-green'>{residentInfo?.name}</h3>

                            <ul>
                                <li>
                                    <span className='text-light-gray'>Species: </span>
                                    <span>{residentInfo?.species}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Type: </span>
                                    <span>{(residentInfo?.type) || "Undefined"} </span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Status: </span>
                                    <span>{residentInfo?.status}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Gender: </span>
                                    <span>{residentInfo?.gender}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Appearencies: </span>
                                    <span>{residentInfo?.episode.length}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Origin: </span>
                                    <span>{residentInfo?.origin.name}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Location: </span>
                                    <span>{residentInfo?.location.name}</span>
                                </li>

                            </ul>
                        </div>

                        <button onClick={handleClickCloseButton} className='absolute top-1 right-2 cursor-pointer'>
                            <i className='bx bx-x-circle text-dark-green text-4xl bg-black md:bg-none rounded-full hover:scale-110'></i>
                        </button>
                    </div>
                    
                </section>
    );
}
