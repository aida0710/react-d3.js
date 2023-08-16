import React from 'react';

function App() {
    return (

        <div className="relative py-16">
            <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <img src="https://placehold.jp/24/" className="ml-4 w-20" alt="tailus logo"/>
                    <div
                        className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
                        <div className="p-8 py-12 sm:p-16">
                            <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">アカウントにログイン</h2>
                            <form action="" className="space-y-8">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-gray-600 dark:text-gray-300">メールアドレス</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="username"
                                        placeholder="user@example.com"
                                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="pwd"
                                               className="text-gray-600 dark:text-gray-300">パスワード</label>
                                    </div>
                                    <input
                                        type="password"
                                        name="pwd"
                                        id="pwd"
                                        autoComplete="current-password"
                                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                                    />
                                    <button className="-mr-2 p-2" type="reset">
                                        <span className="text-sm text-primary">パスワードのリセット</span>
                                    </button>
                                </div>

                                <button type="submit"
                                        className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                    <span
                                        className="relative text-base font-semibold text-white dark:text-dark">ログイン</span>
                                </button>

                                <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm text-right text-gray-500 dark:text-gray-400">

                                    <a href="https://qiita.com/" className="text-primary hover:text-white">アカウントの作成</a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="space-x-4 text-center text-gray-500">
                        <span>&copy; aida</span>
                        <a href="https://qiita.com/" className="text-sm hover:text-primary">Contact</a>
                        <a href="https://qiita.com/" className="text-sm hover:text-primary">Privacy & Terms</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
