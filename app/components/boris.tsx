import React from 'react';

export const BorisJavier = () => {
    return (
        <div className="max-w-2xl mx-auto p-8 bg-gray-100">
            <div className="text-center border-b-2 border-black pb-4">
                <h1 className="text-4xl font-serif font-bold mb-2">The Daily News</h1>
                <p className="text-sm">Volume 1, Issue 1 - January 1, 2024</p>
            </div>

            <article className="mt-6">
                <h2 className="text-2xl font-serif font-bold mb-4">
                    Breaking: Technology Transforms Modern Life
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <p className="text-sm font-serif leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                    <div className="col-span-1">
                        <div className="bg-gray-300 w-full h-32 flex items-center justify-center">
                            [Photo]
                        </div>
                        <p className="text-xs mt-1 italic">Caption: A representative image</p>
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-serif font-bold mb-2">
                        Latest Updates
                    </h3>
                    <p className="text-sm font-serif">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident.
                    </p>
                </div>
            </article>
        </div>
    );
};
