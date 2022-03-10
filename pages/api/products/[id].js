import dbConnect from "../../../util/mongo"
import Product from "../../../models/Product"



export default async function handler(req, res) {
    const { 
        method, 
        query: { id }, 
        } = req;

    dbConnect();
      // methode get sur mongose pour recuperer les desc,title,price des produits
    if (method === "GET") {
        try {
      const product = await Product.findById(id)
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
        
    }
    // methode PUT pour la mise a jour des produits et des tarifs
    if (method === "PUT") {
        
       try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
    }
    //methode delete pour la suppression  des produits et des tarifs ect
    if (method === "DELETE") {
        
        try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("Le produit a bien été détruit !");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
