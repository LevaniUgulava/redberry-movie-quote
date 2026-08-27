import EyeIcon from "@/components/ui/icons/Movie/EyeIcon.tsx";
import EditIcon from "@/components/ui/icons/Movie/EditIcon.tsx";
import DeleteIcon from "@/components/ui/icons/Movie/DeleteIcon.tsx";

function PopOverContent() {
    return <div className="flex flex-col gap-8 p-5">
        <div className='flex gap-4 cursor-pointer'>
            <EyeIcon/>
            <span className='text-base leading-[150%] font-normal text-white'>View</span>
        </div>
        <div className='flex gap-4 cursor-pointer'>
            <EditIcon/>
            <span className='text-base leading-[150%] font-normal text-white'>Edit</span>
        </div>
        <div className='flex gap-4 cursor-pointer'>
            <DeleteIcon/>
            <span className='text-base leading-[150%] font-normal text-white'>Delete</span>
        </div>
    </div>
}

export default PopOverContent;
