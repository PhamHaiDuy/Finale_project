import React from "react";
const AccountSetting = () => {
    return (
        <div className="w-full h-full">
            <div className="text-2xl font-bold mt-5 ml-10 ">
                <h3 class="mb-4">Account Settings</h3>
            </div>
            <div className="flex flex-col gap-10 mt-5 ml-10">
                <div className="flex gap-32">
                    <div class="flex flex-col w-[400px]">
                        <label>First Name</label>
                        <input type="text" class="form-control p-3 mt-2 border-2 rounded-md" />
                    </div>
                    <div class="flex flex-col w-[400px]">
                        <label>Last Name</label>
                        <input type="text" class="form-control p-3 mt-2 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex gap-32">
                    <div class="flex flex-col w-[400px]">
                        <label>Email</label>
                        <input type="text" class="form-control p-3 mt-2 border-2 rounded-md " />
                    </div>
                    <div class="flex flex-col w-[400px]">
                        <label>Phone</label>
                        <input type="text" class="form-control p-3 mt-2 border-2 rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );

}
export default AccountSetting;