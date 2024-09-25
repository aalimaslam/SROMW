import { Card } from "@/components/ui/card";
import { useState, MouseEvent } from "react";
import { Button } from "../ui/button";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import showToast from "@/utils/showToast";

interface CardsState {
    active: number[];
    inactive: number[];
}

function DashboardReviews() {
    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [selectedActiveCards, setSelectedActiveCards] = useState<number[]>([]);
    const [cards, setCards] = useState<CardsState>({
        active: [1, 2, 3, 4],
        inactive: [6, 7, 8, 9, 0],
    });

    const handleCardClick = (id: number, type: "active" | "inactive") => {
        if (type === "active") {
            setSelectedActiveCards((prevSelectedCards) =>
                prevSelectedCards.includes(id)
                    ? prevSelectedCards.filter((card) => card !== id)
                    : [...prevSelectedCards, id]
            );
        } else {
            setSelectedCards((prevSelectedCards) =>
                prevSelectedCards.includes(id)
                    ? prevSelectedCards.filter((card) => card !== id)
                    : [...prevSelectedCards, id]
            );
        }
    };

    const handleSwitch = (type: "right" | "left") => {
        if(type == "left" && selectedActiveCards.length == 0){
            showToast({mode : "warning", message : "Please Select Some Active Cards First"});
            return;
        }
        if(type == "right" && selectedCards.length == 0){
            showToast({mode : "warning", message : "Please select Some Inactive Cards First"});
            return;
        }
        if (type === "right") {
            setCards((prevCards) => ({
                active: [...prevCards.active, ...selectedCards],
                inactive: prevCards.inactive.filter((card) => !selectedCards.includes(card)),
            }));
            setSelectedCards([]); // Clear selected inactive cards
        } else {
            setCards((prevCards) => ({
                inactive: [...prevCards.inactive, ...selectedActiveCards],
                active: prevCards.active.filter((card) => !selectedActiveCards.includes(card)),
            }));
            setSelectedActiveCards([]); // Clear selected active cards
        }
    };

    const renderCardList = (cards: number[], type: "active" | "inactive") => {
        const selectedCardsSet = type === "active" ? selectedActiveCards : selectedCards;

        return cards.map((id) => (
            <Card
                key={id}
                onClick={() => handleCardClick(id, type)}
                className={`rounded w-[100%] h-[150px] cursor-pointer ${
                    selectedCardsSet.includes(id) ? "bg-[#e0e0e0]" : "bg-[#f5f5f5]"
                }`}
            >
                {id}
            </Card>
        ));
    };

    return (
        <div className="flex gap-[10px] justify-start items-start">
            <div
                data-id="inactive"
                className="bg-white rounded-md w-[43%]  p-[10px] flex flex-col justify-start gap-[10px]"
            >
                <div className="text-2xl font-bold flex items-center gap-[10px]">
                    Inactive reviews{" "}
                    <span className="inline-block rounded-full h-[20px] w-[20px] bg-red-600"></span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    {renderCardList(cards.inactive, "inactive")}
                </div>
            </div>
            <div className="w-[12%] sticky top-[calc(50%-10%)]">
                <div className="flex flex-col justify-around h-[100%] gap-[40px]">
                    <Button onClick={() => handleSwitch("right")}>
                        <BiRightArrow />
                    </Button>
                    <Button onClick={() => handleSwitch("left")}>
                        <BiLeftArrow />
                    </Button>
                </div>
            </div>
            <div
                data-id="active"
                className="bg-white rounded-md w-[43%]  p-[10px] flex flex-col justify-start gap-[10px]"
            >
                <div className="text-2xl font-bold flex items-center gap-[10px]">
                    Active reviews{" "}
                    <span className="inline-block rounded-full h-[20px] w-[20px] bg-green-600"></span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    {renderCardList(cards.active, "active")}
                </div>
            </div>
        </div>
    );
}

export default DashboardReviews;
