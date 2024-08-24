import NavBar from "./NavBar"


export default function Projects () {
    return(
        <div>
        <NavBar/>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <heading className="text-5xl ">Projects</heading>
            <h1 className="text-2xl "> Here are the projects I have completed or those I am making progress with.</h1>
            
            <div class=" grid grid-cols-1 p-24 place-items-center gap-y-3 ">
            <div class="bg-white rounded-lg shadow-2xl md:flex w-4/12">
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Natural Language Translation</div>
            <p class="text-gray-700 text-base">
                Fine-tuned existing models for translation between English and Spanish.
            </p>
            <a href='https://github.com/ItsBeans/translator' className="inline-block bg-gray-200 hover:bg-gray-300 shadow-lg text-gray-700 font-semibold  px-3 rounded"> View repository</a>
            </div>
            <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Machine Learning</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Django</span>
            </div>
            </div>


            <div class="bg-white rounded-lg shadow-2xl md:flex w-4/12">
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Grocery shopping mobile app</div>
            <p class="text-gray-700 text-base">
                Users can scan the barcode of items and then add them to basket for payment. Created for a grocery store.
            </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Kotlin</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
            </div>
            </div>


            <div class="bg-white rounded-lg shadow-2xl md:flex w-4/12">
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">League of Legends Match Outcome Prediction</div>
            <p class="text-gray-700 text-base">
            Built a Random Forest classifier with to predict match outcomes using historical data and
player statistics from the Riot Games API.

            </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">scikit-learn</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Matplotlib</span>
            </div>
            </div>

            <div class="bg-white rounded-lg shadow-2xl md:flex w-4/12">
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Portfolio Website</div>
            <p class="text-gray-700 text-base">
            The website you are currently on, used as a profile and to display projects.
            </p>
            </div>
            <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
            </div>
            </div>
            </div>
        </div>
    )
}