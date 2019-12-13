let modelContainer = document.getElementById("container");
let model = new TSP.models.Sequential(modelContainer);

model.add(new TSP.layers.GreyscaleInput());
model.add(new TSP.layers.Padding2d());
model.add(new TSP.layers.Conv2d());
model.add(new TSP.layers.Pooling2d());
model.add(new TSP.layers.Conv2d());
model.add(new TSP.layers.Pooling2d());
model.add(new TSP.layers.Dense());
model.add(new TSP.layers.Dense());
model.add(new TSP.layers.Output1d({
    outputs: ["right", "left"]
}));

model.load({
    type: "tfjs",
    url: "https://tensorspace.org/assets/model/lenet/mnist.json"
});
model.init(function() {
    model.predict(data5);
    console.log("Hello World from TensorSpace!");
});