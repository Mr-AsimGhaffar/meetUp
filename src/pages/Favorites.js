function FavoritesPage() {
  return (
    <div>
      <div>Favorites</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button>Click</button>
          <button>Remove</button>
        </div>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
