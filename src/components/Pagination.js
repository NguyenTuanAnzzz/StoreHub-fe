
export default function Pagination({ totalPages, currentPage, handleChange }) {

    const pages = [];

    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    }
    // Trường hợp gần đầu
    else if (currentPage <= 3) {
        pages.push(1);
        pages.push(2);
        pages.push(3);
        pages.push("...");
        pages.push(totalPages);
    }

    // Trường hợp ở giữa
    else if (currentPage >= 4 && currentPage <= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
    }

    // Trường hợp gần cuối
    else {
        pages.push(1);
        pages.push("...");
        pages.push(totalPages - 2);
        pages.push(totalPages - 1);
        pages.push(totalPages);
    }


    return (
        <div className="flex items-center justify-center gap-2 mt-6">
            <button className="px-3 py-2 border rounded-lg" onClick={() => handleChange(currentPage - 1)} disabled={currentPage === 0}>
                ←
            </button>
            {/* Pages */}
            {pages.map((page, index) => {

                // Nếu là ...
                if (page === "...") {
                    return (
                        <span key={index} className="px-2">
                            ...
                        </span>
                    );
                }

                // Nếu là số
                return (
                    <button
                        key={page}
                        onClick={() => handleChange(page - 1)}
                        className={`px-3 py-2 border rounded-lg ${page - 1 === currentPage
                            ? "bg-mint-green text-white border-mint-green"
                            : "bg-white text-ink-black hover:bg-mint-green/10"
                            }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button className="px-3 py-2 border rounded-lg" onClick={() => handleChange(currentPage + 1)} disabled={currentPage === totalPages - 1}>
                →
            </button>
        </div>
    );
}

