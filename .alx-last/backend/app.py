from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolios.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the Portfolio model
class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=True)

# Initialize the database
with app.app_context():
    db.create_all()

# Routes
@app.route('/portfolios', methods=['GET'])
def get_portfolios():
    portfolios = Portfolio.query.all()
    return jsonify([{'id': p.id, 'name': p.name, 'description': p.description} for p in portfolios])

@app.route('/portfolios', methods=['POST'])
def create_portfolio():
    data = request.json
    new_portfolio = Portfolio(name=data['name'], description=data.get('description', ''))
    db.session.add(new_portfolio)
    db.session.commit()
    return jsonify({'id': new_portfolio.id, 'name': new_portfolio.name, 'description': new_portfolio.description}), 201

@app.route('/portfolios/<int:id>', methods=['DELETE'])
def delete_portfolio(id):
    portfolio = Portfolio.query.get_or_404(id)
    db.session.delete(portfolio)
    db.session.commit()
    return jsonify({'message': 'Portfolio deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
