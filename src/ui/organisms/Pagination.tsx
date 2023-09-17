import { ActiveLink } from "../atoms/ActiveLink"

export const Pagination = ({ currentPage }: { currentPage: number}) => {

    return(
        <div className="flex justify-center">
            <div className="flex rounded-md mt-8">
                {currentPage}
                <ActiveLink href={`/products/${4}`} className="text-blue-500 hover:text-blue" activeClassName="underline" exact={true}>4</ActiveLink>
                <ActiveLink href={`/products/${5}`} className="text-blue-500 hover:text-blue" activeClassName="underline" exact={true}>5</ActiveLink>
            </div>
        </div>
        
    )
}