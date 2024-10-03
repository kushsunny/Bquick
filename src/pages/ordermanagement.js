import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import src1 from '../photpos/7 Onion Pizza.jpg'


const OrderManagement = () => {
  // Manage the tabs: New, Preparing, Ready, etc.
  const [activeTab, setActiveTab] = useState("new");

  const tabs = ["New", "Preparing", "Ready", "Picked Up", "Past Orders"];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-4 text-lg font-semibold">Menu</div>
        <nav className="flex-1">
          <ul className="space-y-4 px-4">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Pizza
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Burgers
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Pasta
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer flex justify-between">
              Chinese <FaExclamationCircle className="text-orange-500" />
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Maggi
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Beverages
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Dessert
            </li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
              Help
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <header className="flex justify-between items-center bg-white shadow p-4 mb-8">
          <div>
            <h1 className="text-xl font-semibold">BQuick</h1>
            <p className="text-gray-600">KIET | ORDER ID: XXXXX</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            FAQs
          </button>
        </header>

        {/* Tabs */}
        <div className="border-b border-gray-300 mb-4">
          <ul className="flex space-x-6 text-lg">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer pb-2 ${
                  activeTab === tab.toLowerCase()
                    ? "border-orange-500 text-orange-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        {/* <div className="flex items-center justify-center h-96 bg-white border border-gray-200 rounded-md">
          {activeTab === "new" ? (
            <div className="text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="No Orders"
                className="mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800">No Orders!</h2>
              <p className="text-gray-600">New orders will appear here</p>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl text-gray-800">No orders in the "{activeTab}" tab.</h2>
              <NavLink to="/welcome">
              <button
            className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all"
           
          >
            Go Back
          </button>
          </NavLink>
            </div>
          )}
        </div> */}

                {/* Item 1 */}

        <div className="flex flex-wrap">
          < div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden object-fit text-white rounded-md">
              <img
                src="./guwdxniz4ib0drkzwtl0.webp"
                alt="card-image"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Corn Pizza
              </h6>
              <p class="text-slate-600 leading-normal font-light">
              Medium Spicy | Serves 1 | A twice peccable layer of mozzarella cheese with home made pizza sauce.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Add Cart
              </button>
            </div>
          </div>

            {/* Item 2 */}

          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src="guwdxniz4ib0drkzwtl0.webp"
                alt="card-image"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Website Review Check
              </h6>
              <p class="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Read more
              </button>
            </div>
          </div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src="../photpos/"
                alt="card-image"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Website Review Check
              </h6>
              <p class="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Read more
              </button>
            </div>
          </div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="card-image"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Website Review Check
              </h6>
              <p class="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Read more
              </button>
            </div>
          </div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="card-image"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Website Review Check
              </h6>
              <p class="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Read more
              </button>
            </div>
          </div>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                alt="card-image"
              />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                Website Review Check
              </h6>
              <p class="text-slate-600 leading-normal font-light">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
