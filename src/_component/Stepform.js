"use client";

import React, { useState } from "react";
import Swipslider from "@/_component/Swipslider";

export default function Stepform() {
  const [activeTab, setActiveTab] = useState("contact_tab");

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              type="button"
              role="tab"
              id="contact_details"
              aria-controls="contact_panel"
              aria-selected={activeTab === "contact_tab"}
              onClick={() => setActiveTab("contact_tab")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "contact_tab"
                  ? "text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Contact Details
            </button>
          </li>

          <li className="me-2" role="presentation">
            <button
              type="button"
              role="tab"
              id="property_details"
              aria-controls="property_panel"
              aria-selected={activeTab === "property_tab"}
              onClick={() => setActiveTab("property_tab")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "property_tab"
                  ? "text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Property Details
            </button>
          </li>

          <li className="me-2" role="presentation">
            <button
              type="button"
              role="tab"
              id="landlord_details"
              aria-controls="landlord_panel"
              aria-selected={activeTab === "landlord_tab"}
              onClick={() => setActiveTab("landlord_tab")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "landlord_tab"
                  ? "text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Landlord Details
            </button>
          </li>

          <li className="me-2" role="presentation">
            <button
              type="button"
              role="tab"
              id="tanent_details"
              aria-controls="tanent_panel"
              aria-selected={activeTab === "tanent"}
              onClick={() => setActiveTab("tanent")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "tanent"
                  ? "text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Tanent Details
            </button>
          </li>

          <li className="me-2" role="presentation">
            <button
              type="button"
              role="tab"
              id="summary_details"
              aria-controls="summary_panel"
              aria-selected={activeTab === "summary"}
              onClick={() => setActiveTab("summary")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "summary"
                  ? "text-purple-600 border-purple-600 dark:text-purple-500 dark:border-purple-500"
                  : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              Summary
            </button>
          </li>
        </ul>
      </div>

      {/* Tabs content */}
      <div className="p-6 mx-auto max-w-screen-sm">
        {activeTab === "contact_tab" && (
          <section
            id="contact_panel"
            role="tabpanel"
            aria-labelledby="contact_details"
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div>
              <div className="flex gap-3">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City of the Property*
                  </label>
                  <select
                    id="countries"
                    name="country"
                    defaultValue=""
                    className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Choose a country
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>

                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="ref_dep"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Refundable Deposite
                  </label>
                  <input
                    type="phone"
                    id="ref_dep"
                    name="ref_dep"
                    defaultValue=""
                    placeholder="Refundable Deposite"
                    className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>

              <div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Stamp Paper Amount *
                  </label>
                  <ul className="flex justify-between mb-2">
                    <li>
                      <input
                        type="radio"
                        id="stamp1"
                        name="stamp_price"
                        defaultValue="stamp1"
                        className="hidden peer"
                        required=""
                      />
                      <label
                        htmlFor="stamp1"
                        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        ₹ 100 Stamp
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="stamp2"
                        name="stamp_price"
                        defaultValue="stamp2"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="stamp2"
                        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        ₹ 200 Stamp
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="stamp3"
                        name="stamp_price"
                        defaultValue="stamp3"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="stamp3"
                        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        ₹ 300 Stamp
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="stamp4"
                        name="stamp_price"
                        defaultValue="stamp4"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="stamp4"
                        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        ₹ 400 Stamp
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="stamp5"
                        name="stamp_price"
                        defaultValue="stamp5"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="stamp5"
                        className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        ₹ 500 Stamp
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Agreement Duration *
                </label>
                <ul className="flex gap-3">
                  <li>
                    <input
                      type="radio"
                      id="month6"
                      name="agreement_duration"
                      defaultValue="month6"
                      className="hidden peer"
                      required=""
                    />
                    <label
                      htmlFor="month6"
                      className="mb-2 inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      6 Months
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="month11"
                      name="agreement_duration"
                      defaultValue="month11"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="month11"
                      className="mb-2 inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      11 Months
                    </label>
                  </li>
                </ul>
              </div>

              <div className="w-full">
                <label
                  htmlFor="month_rent"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Monthly Rent Amount
                </label>
                <input
                  type="phone"
                  id="month_rent"
                  name="month_rent"
                  defaultValue=""
                  placeholder="Monthly Rent Amount"
                  className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Rent is Excluding Maintenance*
                </label>
                <div className="flex gap-3">
                  <div className="flex items-center mb-2">
                    <input
                      id="maintanence_yes"
                      type="radio"
                      defaultValue=""
                      name="maintanence_rent"
                      className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="maintanence_yes"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked=""
                      id="maintanence_no"
                      type="radio"
                      defaultValue=""
                      name="maintanence_rent"
                      className="w-4 h-4  bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="maintanence_no"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="maintanence_amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Maintenance Amount
                  </label>
                  <input
                    type="phone"
                    id="maintanence_amount"
                    name="maintanence_amount"
                    defaultValue=""
                    placeholder="Maintenance Amount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Maintenance Pay Frequency*
                  </label>
                  <select
                    id="countries"
                    name="country"
                    defaultValue=""
                    className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Choose pay frequency
                    </option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quaterly">Quaterly</option>
                    <option value="Semi Annually<">Semi Annually</option>
                    <option value="Annually">Annually</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex gap-3">
                  <div className="w-full md:w-1/2 flex items-center">
                    <input
                      id="increase_rent"
                      type="checkbox"
                      defaultValue="yes"
                      name="increase_rent"
                      className="w-4 h-4 bg-gray-100 border-gray-300   dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="increase_rent"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Increase Rent
                    </label>
                  </div>
                  <div className="w-full md:w-1/2">
                    <label
                      htmlFor="increase_percent"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Increase in percentage
                    </label>
                    <input
                      type="phone"
                      id="increase_percent"
                      name="increase_percent"
                      defaultValue=""
                      placeholder="Increase in percentage"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="agreement_start_date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Agreement Start Date
                </label>
                <input
                  type="date"
                  id="agreement_start_date"
                  name="agreement_start_date"
                  defaultValue=""
                  placeholder="Select Agreement Start Date"
                  className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  I am
                </label>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-">
                  <li>
                    <input
                      type="radio"
                      id="tanent"
                      name="iam"
                      defaultValue="tanent"
                      className="hidden peer mb-2"
                      required=""
                    />
                    <label
                      htmlFor="tanent"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      Tanent
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="owner"
                      name="iam"
                      defaultValue="owner"
                      className="hidden peer mb-2"
                    />
                    <label
                      htmlFor="owner"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      Owner
                    </label>
                  </li>
                </ul>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Minimum Lockin Period (In months) *
                </label>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <li>
                    <input
                      type="radio"
                      id="lockin1"
                      name="lockin_period"
                      defaultValue="lockin1"
                      className="hidden peer mb-2"
                      required=""
                    />
                    <label
                      htmlFor="lockin1"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      0
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="lockin2"
                      name="lockin_period"
                      defaultValue="lockin2"
                      className="hidden peer mb-2"
                    />
                    <label
                      htmlFor="lockin2"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      1
                    </label>
                  </li>
                  <li>
                    <input
                      type="number"
                      name="lockin_period"
                      id="lockin_no"
                      aria-describedby="helper-text-explanation"
                      className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Number of Months"
                      required=""
                    />
                  </li>
                </ul>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Notice Period (In months)*
                </label>
                <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-2">
                  <li>
                    <input
                      type="radio"
                      id="notice0"
                      name="notice_period"
                      defaultValue="notice0"
                      className="hidden peer mb-2"
                      required=""
                    />
                    <label
                      htmlFor="notice0"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      0
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="notice1"
                      name="notice_period"
                      defaultValue="notice1"
                      className="hidden peer mb-2"
                    />
                    <label
                      htmlFor="notice1"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      1
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="notice2"
                      name="notice_period"
                      defaultValue="notice2"
                      className="hidden peer mb-2"
                    />
                    <label
                      htmlFor="notice2"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      2
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="notice3"
                      name="notice_period"
                      defaultValue="notice3"
                      className="hidden peer mb-2"
                    />
                    <label
                      htmlFor="notice3"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      3
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="notice4"
                      name="notice_period"
                      defaultValue="notice4"
                      className="hidden peer mb-2"
                    />
                    <label
                      htmlFor="notice4"
                      className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      4
                    </label>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <div className="w-full">
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Deposit Payment Details*
                  </label>
                  <select
                    id="countries"
                    name="country"
                    defaultValue=""
                    className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select Payment Method
                    </option>
                    <option value="cheque">Cheque/NEFT/RTGS</option>
                    <option value="demand_draft">Demand Draft</option>
                    <option value="net_bank">Internet Banking</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Amenities
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center me-4">
                    <input
                      id="bed-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Bed
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      id="fans-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="fans-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Fans
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="tubes-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="tubes-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Tubes
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Sofas-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Sofas-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Sofas
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="tubes-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="tubes-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Tubes
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="ACs-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="ACs-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      ACs
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Electric-Geysers-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Electric-Geysers-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Electric Geysers
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Gas-Geysers-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Gas-Geysers-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Gas Geysers
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Chairs-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Chairs-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Chairs
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Tables-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Tables-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Tables
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Washing-Machines-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Washing-Machines-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Washing Machines
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Curtains-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Curtains-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Curtains
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Bulbs-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Bulbs-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Bulbs
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Cupboards-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Cupboards-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Cupboards
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Aircoolers-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Aircoolers-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Aircoolers
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Watercoolers-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Watercoolers-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Watercoolers
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Bulbs-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Bulbs-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Bulbs
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <input
                      defaultChecked=""
                      id="Bulbs-amenities"
                      type="checkbox"
                      defaultValue=""
                      name="amenities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="Bulbs-amenities"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Bulbs
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-white">
                  Miscellaneous Clause (Other Terms & Conditions){" "}
                </label>
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Select from popular clause{" "}
                </p>
                <ul className="grid w-full gap-6 md:grid-cols-3">
                  <li>
                    <input
                      type="checkbox"
                      id="paint_clean_charge"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                      required=""
                    />
                    <label
                      htmlFor="paint_clean_charge"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Painting & Cleaning Charges
                        </div>
                        <div className="w-full text-sm">
                          On conclusion of the agreement and vacating the
                          premises, the licensee has agreed to a deduction of 1
                          month licensee fees from the deposit towards painting
                          and cleaning charges.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="prop_condition"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="prop_condition"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Property Condition Upon Vacating
                        </div>
                        <div className="w-full text-sm">
                          Upon vacating the premises, the Tenant is required to
                          return the property in a clean condition, similar to
                          the condition at move-in.If the Landlord deems that
                          the premises require additional cleaning or repainting
                          beyond normal wear and tear, the Landlord will deduct
                          the cleaning and painting associated costs.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="elec_water_charge"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="elec_water_charge"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Electricity & Water Charges
                        </div>
                        <div className="w-full text-sm">
                          The Tenant shall be responsible for the payment of all
                          electricity and water bills associated with the
                          premises during the tenancy.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="furniture_1"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="furniture_1"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Furniture
                        </div>
                        <div className="w-full text-sm">
                          The Tenant shall not make any alterations to the
                          furniture, including but not limited to painting,
                          reupholstering, or disassembling, without the
                          Landlord's written consent.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="furniture_damage"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="furniture_damage"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Furniture & Damages
                        </div>
                        <div className="w-full text-sm">
                          In the event of damage caused by the Tenant, the
                          Tenant shall be liable for the cost of repair or
                          replacement of the damaged furniture or furnishings.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="refund_depo"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="refund_depo"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Refundable Deposit
                        </div>
                        <div className="w-full text-sm">
                          The Landlord may deduct reasonable cleaning and
                          painting costs from the Tenant's security deposit if
                          the premises are not returned in a satisfactory
                          condition.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="security_1"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="security_1"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Security
                        </div>
                        <div className="w-full text-sm">
                          This Agreement can be cancelled immediately by the
                          licensor if the Licensee is found guilty of conducting
                          any illegal activity on the premises.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="pet_1"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="pet_1"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Pets</div>
                        <div className="w-full text-sm">
                          The Tenant agrees that no additional pets will be kept
                          on the premises without the Landlord’s prior written
                          consent.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="pet_2"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="pet_2"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Pets</div>
                        <div className="w-full text-sm">
                          The Tenant shall be liable for any damage caused by
                          the pet to the premises, including but not limited to
                          chewing, scratching, or soiling. The tenant agrees to
                          repair any such damage at their own expense or
                          reimburse the Landlord for the cost of repairs.
                        </div>
                      </div>
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="gst_regist"
                      defaultValue=""
                      name="other_tc"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="gst_regist"
                      className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="block">
                        <div className="w-full text-lg font-semibold">
                          Prohibition on GST Registration
                        </div>
                        <div className="w-full text-sm">
                          The Tenant shall not use the Premises to obtain or
                          register for Goods and Services Tax (GST), nor
                          represent it as their principal place of business for
                          GST purposes, without prior written consent from the
                          Landlord. Any such action shall constitute a material
                          breach and may lead to immediate termination of this
                          Agreement.
                        </div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>

              <Swipslider />

              <label
                htmlFor="message"
                className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
              >
                Write your own clause
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your own clause..."
                defaultValue={""}
              />
            </div>
          </section>
        )}

        {activeTab === "property_tab" && (
          <section
            id="property_panel"
            role="tabpanel"
            aria-labelledby="property_details"
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="inner_tabform space-y-6">
              {/* Property Type */}
              <div className="w-full">
                <label
                  htmlFor="property_type"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Type of Property*
                </label>
                <select
                  id="property_type"
                  name="country"
                  defaultValue=""
                  className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="" disabled>
                    Type of Property
                  </option>
                  <option value="Shop">Shop</option>
                  <option value="Office">Office</option>
                  <option value="Appartment_Flat">Appartment/Flat</option>
                  <option value="Godown">Godown</option>
                  <option value="Independent_House">Independent House</option>
                  <option value="Land_Building_Shed">Land+Building/Shed</option>
                </select>
              </div>

              {/* Floor Number */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Floor Number *
                </label>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[0, 1, 2].map((floor) => (
                    <li key={floor}>
                      <input
                        type="radio"
                        id={`floor_no${floor}`}
                        name="floor_no"
                        defaultValue={`floor_no${floor}`}
                        className="hidden peer"
                        required={floor === 0}
                      />
                      <label
                        htmlFor={`floor_no${floor}`}
                        className="inline-flex items-center justify-center w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-700 peer-checked:text-blue-600 peer-checked:border-blue-600"
                      >
                        {floor}
                      </label>
                    </li>
                  ))}
                  <li>
                    <input
                      type="number"
                      name="floor_no"
                      id="floor_no_count"
                      placeholder="Floor Number"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </li>
                </ul>
              </div>

              {/* Choose BHK */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Choose BHK *
                </label>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: "choose_1rk", label: "1RK" },
                    { id: "choose_1bhk", label: "1BHK" },
                    { id: "choose_2bhk", label: "2BHK" },
                  ].map((bhk) => (
                    <li key={bhk.id}>
                      <input
                        type="radio"
                        id={bhk.id}
                        name="choose_bhk"
                        defaultValue={bhk.id}
                        className="hidden peer"
                        required={bhk.id === "choose_1rk"}
                      />
                      <label
                        htmlFor={bhk.id}
                        className="inline-flex items-center justify-center w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-700 peer-checked:text-blue-600 peer-checked:border-blue-600"
                      >
                        {bhk.label}
                      </label>
                    </li>
                  ))}
                  <li>
                    <input
                      type="number"
                      name="choose_bhk"
                      id="choose_bhk_count"
                      placeholder="BHK Count"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </li>
                </ul>
              </div>

              {/* Text Fields */}
              {[
                {
                  id: "house_no",
                  label: "House Number*",
                  placeholder: "House Number",
                  type: "text",
                },
                {
                  id: "building_name",
                  label: "Building Name*",
                  placeholder: "Building Name",
                  type: "text",
                },
                {
                  id: "enter_locality",
                  label: "Enter Locality*",
                  placeholder: "Enter Locality",
                  type: "text",
                },
                {
                  id: "enter_Pincode",
                  label: "Enter Pincode*",
                  placeholder: "Enter Pincode",
                  type: "tel",
                },
                {
                  id: "city_name",
                  label: "City*",
                  placeholder: "City",
                  type: "text",
                },
                {
                  id: "state_name",
                  label: "State*",
                  placeholder: "State",
                  type: "text",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    maxLength={field.id.includes("Pincode") ? 6 : undefined}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              ))}

              {/* Bathroom Count */}
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  Number Of Bathroom *
                </label>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[0, 1, 2].map((bath) => (
                    <li key={bath}>
                      <input
                        type="radio"
                        id={`bathroom_count${bath}`}
                        name="bathroom_count"
                        defaultValue={`bathroom_count${bath}`}
                        className="hidden peer"
                        required={bath === 0}
                      />
                      <label
                        htmlFor={`bathroom_count${bath}`}
                        className="inline-flex items-center justify-center w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 cursor-pointer transition hover:bg-gray-100 dark:hover:bg-gray-700 peer-checked:text-blue-600 peer-checked:border-blue-600"
                      >
                        {bath}
                      </label>
                    </li>
                  ))}
                  <li>
                    <input
                      type="number"
                      name="bathroom_count"
                      id="bathroom_count_no"
                      placeholder="Number of Bathroom"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeTab === "landlord_tab" && (
          <section
            id="landlord_panel"
            role="tabpanel"
            aria-labelledby="landlord_details"
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="inner_tabform space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="landlord_fname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="landlord_fname"
                  name="landlord_fname"
                  placeholder="Full Name"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Age */}
              <div>
                <label
                  htmlFor="landlord_age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Age*
                </label>
                <input
                  type="tel"
                  id="landlord_age"
                  name="landlord_age"
                  placeholder="Enter Age"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="landlord_gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Gender*
                </label>
                <select
                  id="landlord_gender"
                  name="landlord_gender"
                  defaultValue=""
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Other">Other</option>
                  <option value="Undeclared">Undeclared</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="landlord_phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Phone*
                </label>
                <input
                  type="tel"
                  id="landlord_phone"
                  name="landlord_phone"
                  placeholder="Enter Phone Number"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Permanent Address */}
              <div>
                <label
                  htmlFor="landlord_faddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Permanent Address Full*
                </label>
                <input
                  type="text"
                  id="landlord_faddress"
                  name="landlord_faddress"
                  placeholder="Permanent Address Full*"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* PAN */}
              <div>
                <label
                  htmlFor="landlord_pan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  PAN Number
                </label>
                <input
                  type="text"
                  id="landlord_pan"
                  name="landlord_pan*"
                  placeholder="PAN Number (ABCDE1234F)"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Aadhaar */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-3">
                  <div className="flex items-center">
                    <input
                      id="landlord_adhar_check"
                      type="checkbox"
                      defaultValue="yes"
                      name="landlord_adhar_check"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="landlord_adhar_check"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Add Aadhaar Number (Optional)
                    </label>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="landlord_aadhar"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                      Aadhar Number (12 Digits)
                    </label>
                    <input
                      type="tel"
                      id="landlord_aadhar"
                      name="landlord_aadhar"
                      defaultValue=""
                      placeholder="Enter Aadhar Number"
                      maxLength={12}
                      className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="landlord_email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="landlord_email"
                  name="landlord_email*"
                  placeholder="Email Address"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* PIN Code */}
              <div>
                <label
                  htmlFor="landlord_pincode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  PIN Code*
                </label>
                <input
                  type="tel"
                  id="landlord_pincode"
                  name="landlord_pincode*"
                  placeholder="PIN Code"
                  maxLength={6}
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
          </section>
        )}

        {activeTab === "tanent" && (
          <section
            id="tanent_panel"
            role="tabpanel"
            aria-labelledby="tanent_details"
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="inner_tabform space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="tanent_fname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  id="tanent_fname"
                  name="tanent_fname"
                  placeholder="Full Name"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Age */}
              <div>
                <label
                  htmlFor="tanent_age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Age*
                </label>
                <input
                  type="tel"
                  id="tanent_age"
                  name="tanent_age"
                  placeholder="Enter Age"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="tanent_gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Gender*
                </label>
                <select
                  id="tanent_gender"
                  name="tanent_gender"
                  defaultValue=""
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Other">Other</option>
                  <option value="Undeclared">Undeclared</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="tanent_phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Phone*
                </label>
                <input
                  type="tel"
                  id="tanent_phone"
                  name="tanent_phone"
                  placeholder="Enter Phone Number"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Permanent Address */}
              <div>
                <label
                  htmlFor="tanent_faddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Permanent Address Full*
                </label>
                <input
                  type="text"
                  id="tanent_faddress"
                  name="tanent_faddress"
                  placeholder="Permanent Address Full*"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* PAN */}
              <div>
                <label
                  htmlFor="tanent_pan"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  PAN Number
                </label>
                <input
                  type="text"
                  id="tanent_pan"
                  name="tanent_pan*"
                  placeholder="PAN Number (ABCDE1234F)"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* Aadhaar */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-3">
                  <div className="flex items-center">
                    <input
                      id="tanent_adhar_check"
                      type="checkbox"
                      defaultValue="yes"
                      name="tanent_adhar_check"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="tanent_adhar_check"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Add Aadhaar Number (Optional)
                    </label>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="tanent_aadhar"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                      Aadhar Number (12 Digits)
                    </label>
                    <input
                      type="tel"
                      id="tanent_aadhar"
                      name="tanent_aadhar"
                      defaultValue=""
                      placeholder="Enter Aadhar Number"
                      maxLength={12}
                      className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="tanent_email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="tanent_email"
                  name="tanent_email*"
                  placeholder="Email Address"
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>

              {/* PIN Code */}
              <div>
                <label
                  htmlFor="tanent_pincode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                  PIN Code*
                </label>
                <input
                  type="tel"
                  id="tanent_pincode"
                  name="tanent_pincode*"
                  placeholder="PIN Code"
                  maxLength={6}
                  className="w-full p-2.5 text-sm text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
              </div>
            </div>
          </section>
        )}

        {activeTab === "summary" && (
          <section
            id="summary_panel"
            role="tabpanel"
            aria-labelledby="summary_details"
            className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          ></section>
        )}
      </div>
    </>
  );
}
