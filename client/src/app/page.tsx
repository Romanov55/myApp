import { Categories, Container, Filters, SortPopup, Title } from "@/components/shared";

export default function Home() {
    return <>
        <Container className="mt-10" >
            <Title text="Все пиццы" size="lg" className="font-extrabold"/>
        </Container>

        <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
            <Container className="flex items-center justify-between ">
                <Categories />
                <SortPopup />
            </Container>
        </div>

        <Container className="mt-10 pb-14">
            <div className="flex gap-[60px]">
                <div className="w-[250px]">
                    <Filters />
                </div>
            </div>
            <div className="flex-1">
                <div className="flex flex-col gap-16">

                </div>
            </div>
        </Container>
    </>; 
}
